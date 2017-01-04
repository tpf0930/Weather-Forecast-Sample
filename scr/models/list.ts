import {Clouds} from 'scr/models/clouds';
import {Main} from 'scr/models/main';
import {Snow} from 'scr/models/snow';
import {Sys} from 'scr/models/sys';
import {Weather} from 'scr/models/weather';
import {Wind} from 'scr/models/wind';

export class List {
    constructor(
          public clouds: Clouds,
          public dt: number,
          public dt_txt: string,
          public main: Main,
          public snow: Snow,
          public sys: Sys,
          public weather: Weather[],
          public wind: Wind
    ){}

}