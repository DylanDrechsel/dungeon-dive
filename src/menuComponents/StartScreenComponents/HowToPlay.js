import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const HowToPlay = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
			<div>
				<Button variant='primary' onClick={handleShow}>
					How To Play!
				</Button>

				<Modal
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}>
					<Modal.Header style={{ backgroundColor: 'black' }} closeButton>
						<Modal.Title style={{ backgroundColor: 'black', color: 'white' }}>
							<h1 style={{ 'font-family': 'VT323' }}>How To Play!</h1>
						</Modal.Title>
					</Modal.Header>

					<Modal.Body
						style={{
							'font-family': 'VT323',
							backgroundColor: 'black',
							color: 'white',
						}}>
                            <p>
                                Greetings Adventurer, <br />
                                <br />
                                I heard you boasting at the tavern last night about your skill with the blade and the many dangers you have faced. If you're truely as tough as you as you are maybe you can help our small village with a problem. <br />
                                <br />
                                There is a small ruins outside of the village that hasnt been a problem. Recently though people have been reporting stranges sounds coming from the ruinss. One even claim they saw a spooky ghost! <br />
                                <br />
                                Investigate the ruins and rid us of any danger that they may hold. Our village would be forever greatful.
                                <br /> 
                                <br />
                                <br />
                                Mission Objective: Make it through the ruins alive.
                            </p>
					</Modal.Body>

					<Modal.Footer style={{ backgroundColor: 'black' }}>
						<Button variant='secondary' onClick={handleClose}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
};

export default HowToPlay;