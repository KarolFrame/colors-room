import { Injectable } from '@angular/core';

export type BorderColorType = 'blue' | 'pink' | 'purple';

export interface Person{
  name:string;
  description: string;
  img: string;
  job: string;
}
export interface Collaborator{
  name: string;
  job: string;
}
export interface ExternalContributor{
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleDataService {
  people: Person[] = [
    {
      name:"Jose María Villagrán",
      description:"No soy gamer, pero vivo en un videojuego de terror, donde la linterna se apaga a cada dos por tres. Pero en verdad no está mal porque ya soy amigo de los monstruos y me invitan a pitillos.",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-ZLt2xy0odE/64cf1722eb122eddcf0b8d8b62f6416ce82fcce000397ba95042a0a9a122062c5fb29305edab4287f0c0b952fdf833d7436af7000fa12052e3a150265135e310e6184a20e046a962ba15a3ad7f52e9f7a48c6c65d172deb517f522482086511ed3bb8e23?fit=max&fm=webp&lossless=true",
      job:"Video Game Composer"
    },
    {
      name:"Jesús Ortega",
      description:"Coordinador de producción encargado de la gestión de plazos, reuniones, comunicación y organización de eventos. Me dedico al mundo audiovisual, soy cámara de eventos y publicidad o películas.",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-YWKrJTxwom/77a24f4b12e5fc27732f888a85226b812a2a974d2cca0b42e8adfd3926dcfaeff88f8ac0bbd0db845293356f16cea90ba8ab3f3c51f76f3def5363cfa23e61cd581070d2dc68dae2d1a0ce44f7cee63372bf2862b0414af27978095714666bb829d63e2a?fit=max&fm=webp&lossless=true",
      job:"Producer"
    },
    {
      name:"Carolina Pérez",
      description:"Especializada en Unity y Unreal Engine. He desarrollado varios juegos de forma independiente, participando en varias Jams tanto de forma individual como en grupo.",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-XL0gx_sa4j/654d05cd5df33c130449804ebcafe54356b6b604cdf1f9f2909edb34035f7435720ef9ded54cb4dcd8046cf1dc12f77d589dfde3db2812a8a5bc687d118974c3f4a3b0f84eac0029a7f7908571f8f9c652d56f151e833eaa1d1a187f805f8ade90f06fa8?fit=max&fm=webp&lossless=true",
      job:"Designer & Programmer"
    },
    {
      name:"Luis Orden",
      description:"Director artístico especializado en criaturas y entornos.",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-CBDbUj4W-_/51889beb3434c9faed0def4ad6fa0eb9da1b4e75d976276099238cee6288b9f79c47343ddcc4e0fde245b78d1c45b302afda5d40d699d645e802582353a9cf198cb64157091b39600669796ab592a5007a7122e3b5f35049a1efa9210305dd7fdffbd01c?fit=max&fm=webp&lossless=true",
      job:"2D Artist"
    },
    {
      name:"Javier García",
      description:"Making the world of software more user-friendly one product at a time.",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-TDJQB0IBdM/8fb02ad4150328ac9c291986efaaeda86830bdaaf962270ba25bea24060a5794084ce2baf8b8c03ce5817b389fb8b98db966cb9edd843bf94232f1d80ef8172f7f355cb1aa9cc1ba0e77f50bf2eaae4ee9aa7281959da01d45d0dd046a33f99adcf71b52?fit=max&fm=webp&lossless=true",
      job:"3D Artist"
    },
    {
      name:"Ana María Talavera",
      description:"2D Animator",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-IAJErBQixP/24a402856242a0ad4e5b61147866cc5043a8aabfcadcbe2c02144b8e0b675626f89674000e103f2e1712363f01351a28a5e0ae86d3294f7c4640eab0766d42cd7ae4313a47cc1f9b1db130f9a9b12b477f24d72d3eab73d314217fa488f6ff8ce9ab4ad3?fit=max&fm=webp&lossless=true",
      job:"2D Animator"
    },
    {
      name:"Daniel Haynes",
      description:"Sound Designer",
      img:"https://codaio.imgix.net/docs/AHFp76avVo/blobs/bl-Mt8vWVpCSR/ec3b4e160049fadeb6cea568a59d76cebe32b4ab1afe9a3e8e5db484f6703a87a499012f6afdba1bcf526441eea9d1e714e0ed38d8661afa3c373a1c1cba734c915eab799034e0115aba8256d809148cba5148b0ec46e634acbe18f82f2e6178eec2bd84?fit=max&fm=webp&lossless=true",
      job:"Sound Designer"
    },    
  ];

  collaborators:Collaborator[] =[
    {
      name: "Curro Pérez",
      job:"3D Artist"
    },
    {
      name: "Carlos León",
      job:"3D Artist"
    },
    {
      name: "Daniel Arnal",
      job:"Concept Artist"
    },
    {
      name: "Amanda Romero",
      job:"3D Artist"
    },
  ];

  externalContributors: ExternalContributor[] = [
    {
      name:"Jose Ruiz"
    },
    {
      name:"Francisco Manuel"
    },
    {
      name:"Antonio Mesa"
    },
    {
      name:"Toni García"
    },
    {
      name:"Ángel Oliver"
    },
    {
      name:"Nacho Toro"
    },
    {
      name:"Antonio Gonzalez"
    },
    {
      name:"Ana Fernandez"
    },
    {
      name:"Daniel Romero"
    },
    {
      name:"Maria Barranco"
    },
    {
      name:"Jesus Bonilla"
    },
    {
      name:"Ana Isabel Pérez"
    },
  ];


  constructor(){};

  getPeople(): Person[]{
    return this.people;
  }
  getCollaborators(): Collaborator[]{
    return this.collaborators;
  }
  getExternalContributors(): ExternalContributor[]{
    return this.externalContributors;
  }
}
