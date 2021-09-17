import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [people, setPeople] = useState(data);
  const [showModal, setshowModal] = useState(false);

  return <> {
    showmodal && <Modal />
  }
  </>;
};

export default Index;
