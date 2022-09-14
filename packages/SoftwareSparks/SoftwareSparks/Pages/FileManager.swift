//
//  FileManager.swift
//  SoftwareSparks
//
//  Created by Deondre English on 9/13/22.
//

import Foundation
import SwiftUI

let fm = FileManager.default
let path = "../share"
let items = try! fm.contentsOfDirectory(atPath: path)

struct FileManagerView: View {
    var body: some View {
        Text("\(items[0])")
    }
}


