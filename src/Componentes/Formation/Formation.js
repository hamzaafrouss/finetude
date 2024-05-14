import React, { useEffect, useState } from 'react';
import './Formation.css';
import ModalForme2 from '../Form/ModalForm2';
import { useDispatch, useSelector } from 'react-redux';
import { archiveFormation, getAllFormations } from '../../Store/Formations/actions';
import { useNavigate } from 'react-router-dom';

function Formation() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFormation, setSelectedFormation] = useState(null); 
    const { formations } = useSelector(state => state.FormationsReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    useEffect(() => {
        dispatch(getAllFormations());
    }, [dispatch]);

    useEffect(() => {
        console.log("formations", formations);
    }, [formations]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const openEditModal = (formationId) => {
        const formationToEdit = formations.find(item => item.id === formationId);
        setSelectedFormation(formationToEdit); // Set the selected formation for editing
        setIsModalOpen(true);
    };
    
    const archiveFormationHandler = (formationId) => {
        dispatch({ type: 'ARCHIVE_FORMATION', payload: formationId });
        navigate('/archive');
    };
    

    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Forme Formation</h1>

            <button onClick={openModal}>Add</button>

            {isModalOpen && <ModalForme2 onClose={() => setIsModalOpen(false)} open={isModalOpen} formData={selectedFormation} />}

            <div className="container">
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Description</th>
                            <th scope="col">startDate</th>
                            <th scope="col">endDate</th>
                            <th scope="col">maxplace</th>
                            <th scope="col">center</th>
                            <th scope="col">Total Inscription</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formations?.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.description}</td>
                                    <td>{item.startDate}</td>
                                    <td>{item.endDate}</td>
                                    <td>{item.maxPlace}</td>
                                    <td>{item.center?.name}</td>
                                    <td>{item.totalinscrption}</td>
                                    <td>
                                        <button onClick={() => openEditModal(item.id)}>Edit</button>
                                        <button onClick={() => archiveFormationHandler(item.id)}>Archive</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Formation;
