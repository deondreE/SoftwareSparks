//
//  Terminal.swift
//  macos
//
//  Created by Deondre English on 9/16/22.
//

import Foundation
import SwiftUI

struct TerminalView : View {
    @State private var termInput: String = ""
    @FocusState private var termInputFeild: Bool
    
    var body: some View {
        TextField (
            "Input for the terminal: ",
            text: $termInput
        )
        .focused($termInputFeild)
//        .onSubmit {
//            validate(name: username)
//        }
        .disableAutocorrection(true)
        .border(.secondary)
        
        Text(termInput)
            .foregroundColor(termInputFeild ? .red : .blue)
    }
}
