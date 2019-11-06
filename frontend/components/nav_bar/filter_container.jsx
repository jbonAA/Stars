import React from 'react';
import { connect } from 'react-redux';
import Filter from './filter'

//need to include dispatch to props for 
//do all filtering in the front end.
//additionally need to add a single
//ajax call to find a particular restaurant

export default connect(null, null)(Filter)