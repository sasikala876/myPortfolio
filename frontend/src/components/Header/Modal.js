import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import "./modal.css";

const ModalForPalette = ({ modalOpen, setModalOpen }) => {
  const handleClose = () => setModalOpen(false);
  const primaryColor = [
    { id: 1, color: "#EA1179" },
    { id: 2, color: "#F4D160" },
    { id: 3, color: "#D9534F" },
    { id: 4, color: "#2E8B57" },
    { id: 5, color: "#1E90FF" },
    { id: 6, color: "#FF8C00" },
    { id: 7, color: "#AC66CC" }
  ]
  const backgroundColor = ["#000", "#fff"];

  const getStorageColor = () => {
    let color = "linear-gradient(to left, #aa4b6b,#6b6b83,#3b8d99)";
    if (localStorage.getItem("color")) {
      color = localStorage.getItem("color")
    }
    return color;
  }
  const [color, setColor] = useState(getStorageColor());

  const changeColor = (color) => {
    setColor(color);
    localStorage.setItem("color", color);
  }
  useEffect(() => {
    document.documentElement.style.setProperty("--color-primary", color);
  }, [color])

  return (
    <>
      <Modal show={modalOpen} onHide={handleClose} className='modal'>
        <Modal.Body className='modal-body'>
          <p className='title'>customize your theme</p>
          <p className='title-para'>Change the primary and background color to<span>your preference</span></p>
          <div className='box-color '>
            <p className='sub-title'>Primary color</p>
            <div className='box'>
              {
                primaryColor.map(item => <div style={{ background: item.color }} className='pm-color' onClick={() => changeColor(item.color)}></div>)
              }
            </div>
          </div>
          <div className='box-color'>
            <p className='sub-title'>Background color</p>
            <div className='box bg'>
              {
                backgroundColor.map(item => <div style={{ background: item }} className='bg-color'></div>)
              }
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalForPalette;