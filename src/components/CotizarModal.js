import React from 'react';

const CotizarModal = ({ show, onClose, services }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog" aria-labelledby="cotizarModalLabel" aria-modal="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="cotizarModalLabel">Cotizar Ahora</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form id="cotizar-form">
                            <div className="mb-3">
                                <h3>Servicios de Interés</h3>
                                {services.map(service => (
                                    <div className="form-check" key={service.id}>
                                        <input className="form-check-input" type="checkbox" value={service.name} id={`serviceCheck${service.id}`} />
                                        <label className="form-check-label" htmlFor={`serviceCheck${service.id}`}>
                                            {service.name}
                                        </label>
                                    </div>
                                ))}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cotizarNombre" className="form-label">Nombre Completo</label>
                                <input type="text" className="form-control" id="cotizarNombre" name="cotizarNombre" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cotizarEmail" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="cotizarEmail" name="cotizarEmail" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cotizarEmpresa" className="form-label">Empresa</label>
                                <input type="text" className="form-control" id="cotizarEmpresa" name="cotizarEmpresa" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cotizarTelefono" className="form-label">Teléfono</label>
                                <input type="tel" className="form-control" id="cotizarTelefono" name="cotizarTelefono" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cotizarMensaje" className="form-label">Mensaje Adicional</label>
                                <textarea className="form-control" id="cotizarMensaje" name="cotizarMensaje" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar solicitud de cotización</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CotizarModal;

