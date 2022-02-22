import {Component,OnInit} from '@angular/core';

/**
 * @title Basic Drag&Drop
 */
@Component({
  selector: 'sidebar',
  templateUrl: 'sidebar.html',
  styleUrls: ['sidebar.css'],
})
export class SideBar implements OnInit{
  ngOnInit(): void {
  }
  cross  = '../assets/cross.png'
  move = '../assets/move.png'
  selection = '../assets/selection.png'
  lasso = '../assets/lasso.png'
  magic = '../assets/magic.png'
  crop = '../assets/crop.png'
  eye = '../assets/eye.png'
  healing = '../assets/healing.png'
  brush = '../assets/brush.png'
  stamp = '../assets/stamp.png'
  history = '../assets/history.png'
  eraser = '../assets/eraser.png'
  gradient = '../assets/gradient.png'
  blur = '../assets/blur.png'
  dodge = '../assets/dodge.png'
  pen = '../assets/pen.png'
  text = '../assets/text.png'
  path = '../assets/path.png'
  rectangle = '../assets/rectangle.png'
  hand = '../assets/hand.png'
  mag = '../assets/mag.png'
  edit = '../assets/edit.png'
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */