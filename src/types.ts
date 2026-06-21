/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface GalleryItem {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
  tag: string;
}

export interface ReasonCard {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface TouchHeart {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}
