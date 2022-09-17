//
//  CodeEditor.swift
//  macos
//
//  Created by Deondre English on 9/16/22.
//

import Foundation
import SwiftUI


struct CodeEditorView : View {
    @State private var username: String = ""
    var body : some View {
        TextEditor(text: $username)
            .foregroundColor(Color.green)
            .font(.custom("HelvaticaNeue", size: 18))
            .lineSpacing(10)
            .padding(10)
    }
}
