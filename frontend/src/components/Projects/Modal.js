import React from "react";
import './modal.css';
import cheers1 from './images/cheers1.png';
import cheers2 from './images/cheers2.png';
import cheers3 from './images/cheers3.png';
import cheers4 from './images/cheers4.png';
import cheers5 from './images/cheers5.png';
import cheers6 from './images/cheers6.png';
import cheers7 from './images/cheers7.png';
import cheers8 from './images/cheers8.png';
import cheers9 from './images/cheers9.png';
import form1 from './images/form1.png';
import form2 from './images/form2.png';
import form3 from './images/form3.png';
import ecomm1 from "./images/ecomm1.png";
import ecomm2 from "./images/ecomm2.png";
import ecomm3 from "./images/ecomm3.png";
import ecomm4 from "./images/ecomm4.png";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import Modal from 'react-bootstrap/Modal';

const divStyle = {
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: '400px',
}
const slideImages1 = [
  {
    url: cheers1
  },
  {
    url: cheers2
  },
  {
    url: cheers3
  },
  {
    url: cheers4
  },
  {
    url: cheers5
  },
  {
    url: cheers6
  },
  {
    url: cheers7
  },
  {
    url: cheers8
  },
  {
    url: cheers9
  }
];
const slideImages2 = [
  {
    url: form1
  },
  {
    url: form2
  },
  {
    url: form3
  }
];
const slideImages3 = [
  {
    url: ecomm1
  },
  {
    url: ecomm2
  },
  {
    url: ecomm3
  },
  {
    url: ecomm4
  }
];

const ModalComp = ({ showModal, setShowModal, projectName }) => {
  var slide = ModalImg(projectName);
  function ModalImg(projectName) {
    switch (projectName) {
      case 1: return slideImages1;
      case 2: return slideImages2;
      case 3: return slideImages3;
      default: return null;
    }
  }
  const handleClose = () => setShowModal(false);

  return (
    <Modal show={showModal} onHide={handleClose} className="modal">
      <Modal.Header closeButton></Modal.Header>
      <div className="slide-container">
        <Slide>
          {
            slide.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                </div>
              </div>
            ))}
        </Slide>
      </div>
    </Modal>
  )
}
export default ModalComp;

