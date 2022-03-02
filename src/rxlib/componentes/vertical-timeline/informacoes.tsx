/* rxlib - VerticalTimeline v1.1.0 */

import React from 'react';
import { Modal } from 'react-bootstrap';
import { TextareaLabel } from '../textarea-label';

interface InformacoesProps {
    show: boolean;
    dados: string;
    onHide: () => void;
}

export function Informacoes(props: InformacoesProps) {
    return (
        <Modal show={props.show} onHide={props.onHide} dialogClassName='vertical-timeline-modal-informacoes' centered>
            <Modal.Body className='vertical-timeline-modal-informacoes-body'>
                <form>
                    <div className='container-fluid'>
                        <div className='row px-1'>
                            <div className='col-11'>
                                <h6>Informações</h6>
                            </div>
                            <div className='col-1 vertical-timeline-modal-informacoes-btn-close-cell'>
                                <button type='button' className='btn-close' aria-label='Close' onClick={props.onHide} />
                            </div>
                        </div>
                        <div className='row px-1'>
                            <div className='col-12 mt-1'>
                                <TextareaLabel
                                    rows={10}
                                    foco='sim'
                                    name='dados'
                                    action='view'
                                    label='Dados:'
                                    id='inputDados'
                                    maxLength={2000}
                                    placeholder='Dados'
                                    defaultValue={props.dados}
                                    referencia={React.createRef()}
                                    className='rxlib-textarea-label-coluna' />
                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}