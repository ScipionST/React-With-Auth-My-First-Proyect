import Carrousel from '../components/carrousels/CarrouselClient'
import Footer from '../components/footers/FooterClient'
import eleImg from '../assets/logoEle.svg'
import masaImg from '../assets/logoMasa.svg'
import preImg from '../assets/logoPresion.svg'
import needleShort from '../assets/svgNeedleShort.svg'
import needleLarge from '../assets/svgNeedleLarge.svg'
import tempImg from '../assets/logoTemp.svg'
import timeImg from '../assets/svgTime.svg'
import volImg from '../assets/svgVolumen.svg'
import './css/Inicio.css'

const Inicio = () => {
  
  return (
    <>
      <div className="home-cont">
        <Carrousel/>
        <div className='title'>
          <h1>CALIBRACIONES Y ASISTENCIA TÉCNICA</h1>
        </div>
        <h2 className='subtitle'>CALIBRACIONES, MANTENCIONES Y REPARACIONES DE EQUIPOS MÉDICOS, LABORATORIO E INSTRUMENTOS DE MEDICIÓN DE DIFERENTES INDUSTRIAS</h2>
        <div className='home-services'>
          <div className='magnitudes'>
            <div className='tittle'>
              <h2>Magnitudes</h2>
              <h3>Brindamos servicios de calibración en las siguientes magnitudes</h3>
            </div>
            <div className='magnitud ele'>
              <div className='ele img'>
                <img src={eleImg} alt="" />
              </div>
              <div className='ele-text'>
                <h3>Electricidad</h3>
                <p>Amperímetros de Tenazas, Calibrador de Lazos, Calibradores de Procesos, Décadas de Resistencias, Generador de Funciones, Medidor de Resistencias, Medidores de Aislación, Multímetros, Ohmnímetros, Osciloscopios, Telurómetros, Entre Otros.</p>
              </div>
            </div>
            <div className='magnitud mas'>
              <div className='mas img'>
                <img src={masaImg} alt="" />
              </div>
              <div className='mas-text'>
                <h3>Masa</h3>
                <p>Balanzas, Básculas, Comparadores, Masas Patrones, Termobalanzas</p>
              </div>
            </div>

            <div className='magnitud pre'>
              <div className='pre img'>
                <img className='bar' src={preImg} alt="" />
                <img className='aguja' src={needleLarge} alt="" />
              </div>
              <div className='pre-text'>
                <h3>Presion</h3>
                <p>Barómetros, Columna de Agua, Manómetros, Presostato, Vacuómetros</p>
              </div>
            </div>

            <div className='magnitud temp'>
              <div className='temp img '>
                <img src={tempImg} alt="" />
              </div>
              <div className='temp-text'>
                <h3>Temperatura</h3>
                <p>Baños Termoregulados, Cámaras Climáticas, Dataloggers, Hornos, Incubadoras, Muflas, Neveras, Sondas Termopares, Termocuplas, Termohigrómetros, Termómetros de Botella, Termómetros de Varilla, Termómetros Infrarrojo</p>
              </div>
            </div>

            <div className='magnitud time'>
              <div className='time img'>
                <img className='time-cronometer' src={timeImg} alt=""/>
                <img className='time-min' src={needleLarge} alt=""/>
                <img className='time-sec' src={needleShort} alt=""/>
              </div>
              <div className='time-text'>
                <h3>Tiempo</h3>
                <p>Cronómetros</p>
              </div>
            </div>

            <div className='magnitud volumen'>
              <div className='vol img'>
                <img src={volImg} alt="" />
              </div>
              <h3>Volumen</h3>
              <p>Dispensadores, Matraces de Aforo, Micropipetas, Pipetas, Vuretas</p>
            </div>
          </div>
          <div className='asitencia-tecnica'>

          </div>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default Inicio
