// Controllers for Admin
import admin from '../models/adminModel.js';
import _ from 'lodash';


const read = (req, res) => {
  req.profile = admin
  //Remove password value when returning the user for safety
  req.profile.password = undefined;
  return res.json(req.profile);
}

export default { read };
