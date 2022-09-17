//
//  ContentView.swift
//  macos
//
//  Created by Deondre English on 9/14/22.
//

import SwiftUI
import Foundation

struct ContentView: View {
    @State var isActive = true
    
    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: ClassesView()) {
                    Label ("Classes", systemImage: "book")
                }
                NavigationLink (destination: CodeEditorView()){
                    Label ("CodeEditor", systemImage: "book")
                }
                NavigationLink (destination: TerminalView()) {
                    Label ("Terminal Testing Link", systemImage: "book")
                }
            }
            .navigationTitle("Learn")
            .toolbar {
                ToolbarItem(placement: .navigation) {
                    NavigationLink (destination: SettingsView(active: isActive)) {
                        Button {
                            self.isActive.toggle()
                        } label: {
                            Label("Toolbar Toggle",   systemImage: "line.3.horizontal.circle.fill")
                        }
                    }
                }
            }
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
