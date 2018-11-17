import {Item} from "./item";
import {Spec} from "./spec";

export class Member {

  public publicId: string;
  public name: string;
  public level: number;
  public characterClass: number;
  public items: Item;
  public achievementPoints: number;
  public spec: Spec;
  public pictureUrl: string;
  public image: string;
}
