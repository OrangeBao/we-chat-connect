/**
 * Created by baoyinghai on 7/26/17.
 */
const MAPOBJ = {};

function addController(url, ctl) {
  MAPOBJ[url] = ctl;
  // console.log(MAPOBJ);
}

function getHandler(url) {
  // console.log(MAPOBJ);
  return  MAPOBJ[url];
}

module.exports = {
  addController,getHandler
};