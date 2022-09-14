//
//  ContentView.swift
//  SoftwareSparks
//
//  Created by Deondre English on 9/11/22.
//

import SwiftUI
import Foundation

struct ContentView: View {
    var body: some View {
        NavigationView {
            List {
                NavigationLink(destination: HomeView()) {
                    Label("Courses", systemImage: "book")
                }
                NavigationLink (destination: FileManagerView()) {
                    Label("Tutorials", systemImage: "square")
                }
            }
            .navigationTitle("Learn")
        }
        
        HomeView()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
