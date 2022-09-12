//
//  ContentView.swift
//  SoftwareSparks
//
//  Created by Deondre English on 9/11/22.
//

import SwiftUI
import CodeEditorView


func save() {
    
    
}

struct ContentView: View {
    @State private var text:     String                = "My awesome code..."
      @State private var messages: Set<Located<Message>> = Set ()

      @Environment(\.colorScheme) private var colorScheme: ColorScheme

      @SceneStorage("editPosition") private var editPosition: CodeEditor.Position = CodeEditor.Position()

      var body: some View {
        CodeEditor(text: $text, position: $editPosition, messages: $messages, language: .swift)
          .environment(\.codeEditorTheme,
                       colorScheme == .dark ? Theme.defaultDark : Theme.defaultLight)
      }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
