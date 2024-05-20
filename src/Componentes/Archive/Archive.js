import React, { useEffect } from 'react';
import './Archive.css';
import { useDispatch, useSelector } from 'react-redux';
import {getAllFormations } from '../../Store/Formations/actions';


function Formation() {
  
  const { formations } = useSelector(state => state.FormationsReducer);
  const dispatch = useDispatch();
 

  useEffect(() => {
    dispatch(getAllFormations());
  }, [dispatch]);

  const filtredFormations = (allFormations) => {
    if (!allFormations && allFormations.length <= 0) {
      return []
    }
    return allFormations.filter(formation => formation.status === 'archived');
  }




  const format = (date) => {
    if (!date) return ''
    const title = new Date(date).toLocaleDateString('fr-FR')
    const sTitle = title.split('/')
    const month = parseInt(sTitle[1]) - 1
    const monthNames = ["Janvier", "février", "mars", "avril", "mai", "juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    return sTitle[0] + " " + monthNames[month] + " " + sTitle[2]
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '40px' }}>Formations Archive</h1>



      

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

            </tr>
          </thead>
          <tbody>
            {filtredFormations(formations).map((item, id) => {
              return (
                <tr key={id}>
                  <th scope="row">{id}</th>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.description}</td>
                  <td>{format(item.startDate)}</td>
                  <td>{format(item.endDate)}</td>
                  <td>{item.maxPlace}</td>
                  <td>{item.center?.name}</td>
                  <td>{item.totalinscrption}</td>

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

