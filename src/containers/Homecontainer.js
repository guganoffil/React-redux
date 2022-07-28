
import Home from '../components/Home';

import {connect} from 'react-redux'
import {addTocart,removefromcart} from '../services/action/Action'
const mapStateToProps=state=>({
// data:state.cardItems
})
const mapDispatchToProps= dispatch =>({
    addTocartHandler:(data)=> dispatch (addTocart(data)),
    removefromcartHandler:()=> dispatch (removefromcart())

})


export default connect( mapStateToProps,mapDispatchToProps)(Home)
// export default Home