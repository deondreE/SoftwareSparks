//
//  KeyPressed.swift
//  macos
//
//  Created by Deondre English on 9/16/22.
//

import Foundation
import SwiftUI

var direction: String = ""

func keyDown (event: NSEvent!) {
    if event.keyCode == 123 {
        direction = "left"
    }
    
    else if event.keyCode == 124 {
        direction = "right"
    }
    
    print("Key with number: \(event.keyCode) was pressed!")
}
