import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DescripcionPage } from '../descripcion/descripcion';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

  export class ContactPage {
    ligas = [];
  
    constructor(public navCtrl: NavController) {
      this.ligas = [
        {
          'title': 'Liga Deportiva Barrial "Carcelen Bajo"',
          'imgs': 'assets/imgs/descarga1.jpg',
          'description': 'Institucion con personeria juridica, fundada el 12 de Octubre de 1984,Ubicado en le Barrio Carcelen Bajo.Su infraesrtructura esta acorde con la demanda ponblacional del sector.',
          'color': '#E63135'
        },
        {
          'title': 'Liga Deportiva Barria "Catzuqui de Moncayo"',
          'icon': 'assets/imgs/logo.png',
          'description': 'Situada en el noroccidente del DMQ,su fundacion data del 5 de Abril de 1981;Actualmente cuneta con 15 equipos que participan en un torneo de una sola categoria',
          'color': '#0CA9EA'
        },
        {
          'title': 'Liga Deportiva Barrial "Pisulli"',
          'icon': 'html5',
          'description': 'Fundada el 15 de MArzo de 1985,ubicada en el noroccidente de Quito,en el Barrio Pisulli.Cuenta con infraestructua basica fruto con del esfuerzo y trabajo de los Dirigentes.',
          'color': '#F46529'
        },
        {
          'title': 'Liga Deportiva Barrial "Miraflores Batan Alto"',
          'icon': 'javascript',
          'description': 'Ubicada estrategicamente en el Parque Metroploitano de Quito,fundada el 09 de Octubre de 1988.Por su ubicacion cuenta con un entrono privilegiado de naturaleza ',
          'color': '#FFD439'
        },
        {
          'title': 'Liga Deportiva Barrial "Alma Lojana"',
          'icon': 'sass',
          'description': 'Fundada  el 5 de Diciembre de 1983,Se encuentra ubicada el el Barrio Alma Lojana,en el Sectro del antiguo peaje de la autpista General Rumiñahui.Cuenta con 29 equipos distribuidos en las categorias maxima,master y femenino',
          'color': '#CE6296'
        },
        {
          'title': 'Liga Deportiva Barrial "Eloy Alfaro"',
          'icon': 'nodejs',
          'description': 'Su fundacion data del 15 de Agosto de 1985 y esta ubicada en la calle Cardenal MAria de la Torre,frente al Parque Ecologico Santa Ana.Trasciende por su organizacion como el liderazgo e infraestructura',
          'color': '#78BD43'
        },
        {
          'title': 'Liga Deportiva Barrial "La Forestal ',
          'icon': 'python',
          'description': 'Ubicada en el Centro Oriente de Quito,al costado de la nueva via Simon Bolivar.Su fundacion fue el 19 de Junio de 1985;Acoge aprximadamente a 1000 deportistas',
          'color': '#3575AC'
        },
        {
          'title': 'Liga Deportiva Barrial "La Hospitalaria',
          'icon': 'markdown',
          'description': 'Su fecha de fundacion es el 26 de Julio de 1988;Ubicada a un costado de la autopista General Rumiñahui.Posee una infraestructura realizado gracias a la autogestion de directivos y deportistas',
          'color': '#412159'
        },
        {
          'title': 'Liga Deportiva Barrial "Caupichu"',
          'icon': 'tux',
          'description': 'Ubicada en el Sur de quito en el Barrio del mismo nombre,fue fundada el 12 de septiembre de 1992.Cuenta con un complejo deportivo compuesto de 2 canchas de futbol y dos canchas de indorfutbol,que son utilizadas aproximadamente por 2800 deportistas en futbol masculino y femenino;incluyendo las cateegorias infantojuveniles',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Eugenio Espejo"',
          'icon': 'tux',
          'description': 'Fundada el 1 de Agosto de 1988.Se ubica en el Barrio Eugenio Espejo,en Santa Barbara de Chillogallo.Su histora se forja en base a la vision de persona estusiastas, que con arcos de madera transformaron un espacio verde en cancha de futbol',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Gonzalez Suarez"',
          'icon': 'tux',
          'description': 'Es una de las ligas fundadoras de la ASOLIGAS,instituida el 24 de Julio de 1967;Ubicada en la Avenida Mariscal Sucre,Sector de la Raya , al Sur de Quito; se identifica por su trabajo constante en beneficio del deporte Barrial',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Magdalena Alta"',
          'icon': 'tux',
          'description': 'Fue fundada eñl 24 de mayo de 1996, siendo una de la mas jovenes organizaciones en cuanto a su trayectoria. Es el motor que dinamiza y llena de vida el sector de San Jose de Chilibulo.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Marquesa de Solanda"',
          'icon': 'tux',
          'description': 'Su fecha de fundacion es el 10 de agosto de 1989; institucion juridica, situada en el Barrio Solanda. Poseen una infraestructura basica en donde se cultiva una gran pasion al deporte.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Martha Bucaram"',
          'icon': 'tux',
          'description': 'Se encuantra ubicada en la ciudadela Ibarra, en las calles Jose Rodriguez y Emel Fiallos. Identificados con el deporte barrial, han gestionado sus obras con un gran trabajo dirigencial.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Nuevos Horizontes del Sur"',
          'icon': 'tux',
          'description': 'Se constituye eñl 12 de septiembre de 1998: y se encuantra ubicada en el barrio Nuevos Horizontes del Sur,en el sector de San Martin. Cuenta con 18 equipos filiales distribuidos en diferentes categorias.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Panamericada Sur"',
          'icon': 'tux',
          'description': 'Institucion juridica fundada el 9 de octubre de 1969, situada en el camino al Conde, sector El Blanqueado. Esta conformada con 51 equipos distribuidos en 4 categorias.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Quitus Colonial"',
          'icon': 'tux',
          'description': 'Organizacion deportiva ubicada en el sector oriental de la ciudad de Quito, fundada el 14 de agosto de 1995. actualmente cuenta con 16 equuipos de futbol masculino dividido en 2 series.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "San Francisco de Tanda"',
          'icon': 'tux',
          'description': 'Fundada el 23 de abril de 1992, ubicada en el camino El Nayon sector del Rancho San Francisco. Se han destacado en el hambito deportivo; pero principalmente es cuna de grandes artistas.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "San Jose de Guamani"',
          'icon': 'tux',
          'description': 'Su fundacion data el 17 de junio de 1977; se encuantra ubicada en el sector de la gasolinera de Guamani, en el sur de Quito. Institucion juridica que acoge acerca de 1000 deportistas de la capital.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Union"',
          'icon': 'tux',
          'description': 'El 8 de mayo de 1997 nace la institucion, ubicada en el sector de Guajalo, al sur de Quito. Se caracteriza por su trabajo esmerado y la buena organizacion de los directivos y sus equipos filiales.',
          'color': '#000'
        },
        {
          'title': 'Liga Deportiva Barrial "Vencedores de Tarqui"',
          'icon': 'tux',
          'description': 'Ubicada en el sector de la Mena Dos (ciudadela Tarqui); institucion juridica fundada el 13 de agosto de 1979; nace con grandes ideales gracias al trabajo de moradores y directivos que convirtieron en espacio deportivo, unos predios que estaban destinados a un proyecto de vivienda con fines lucro.',
          'color': '#000'
        },
      ]
    }
  
    openNavDetailsPage(item) {
      this.navCtrl.push(DescripcionPage, { item: item });
    }
  
  }