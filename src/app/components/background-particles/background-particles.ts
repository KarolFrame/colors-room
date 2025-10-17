import { Component } from '@angular/core';
import { NgParticlesModule} from 'ng-particles';
import { ISourceOptions } from 'tsparticles-engine';

@Component({
  selector: 'app-background-particles',
  imports: [NgParticlesModule],
  templateUrl: './background-particles.html',
  styleUrls: ['./background-particles.scss'],
  standalone: true,
})
export class BackgroundParticles {
  particlesOptions: ISourceOptions = { 
    background: {
      color: {
        value: "#0b0d19"
      }
    },
    fpsLimit: 120,
    interactivity: {
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.8, // Aumentamos la opacidad de los enlaces
        width: 2,     // Hacemos las líneas más gruesas
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: true, // <--- CAMBIO: Hacemos el movimiento aleatorio
        speed: 5,     // <--- CAMBIO: Aumentamos la velocidad para que se muevan
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 800 // Valor por defecto
        },
        value: 200, // <--- CAMBIO: Aumentamos la cantidad de partículas
      },
      opacity: {
        value: 1.0, // <--- CAMBIO: Opacidad al máximo
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 3, max: 7 }, // <--- CAMBIO: Hacemos las partículas más grandes
      },
    }
  }

  constructor() {}
}
