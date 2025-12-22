import {
  Component,
  AfterViewInit,
  OnDestroy,
  signal
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './component/navbar/navbar';
import { Footer } from './component/footer/footer';
import { Background } from './component/background/background';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer,Background],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App  {

  protected readonly title = signal('personalPortFolioAngular');

}
