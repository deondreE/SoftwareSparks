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
                Label ("Classes", systemImage: "book")
            }
            .navigationTitle("Learn")
            .toolbar {
                ToolbarItem(placement: .navigation) {
//                    Button {
//                        self.isActive.toggle()
//                    } label: {
//                        Label("Toolbar Toggle",   systemImage: "line.3.horizontal.circle.fill")
//                    }
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
