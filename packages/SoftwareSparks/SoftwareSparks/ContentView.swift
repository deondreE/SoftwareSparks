//
//  ContentView.swift
//  SoftwareSparks
//
//  Created by Deondre English on 9/11/22.
//

import SwiftUI
import PhotosUI


func save() {
    
    
}

struct ContentView: View {
    @State private var image: Image?
    @State private var fliterIntensity = 0.5
    
    var body: some View {
        NavigationView {
            VStack {
                ZStack {
                    Rectangle()
                        .fill(.secondary)
                    
                    Text("Tap to select picture")
                        .foregroundColor(.white)
                        .font(.headline);
                    
                    image?
                        .resizable()
                        .scaledToFit()
                }
                
                .onTapGesture {
                    // Select the image OnTap
                    
                }
                
                HStack {
                    Text("Intensity")
                    Slider(value: $fliterIntensity)
                }
                .padding(.vertical)
                
                HStack {
                    Button("Change Filter") {
                        // change filter
                    }
                    
                    Spacer ()
                    
                    Button("Save") {
                        // save the picture
                    }
                }
            }
            .padding([.horizontal, .bottom])
            .navigationTitle("Instaifier")
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
