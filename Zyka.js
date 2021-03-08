import React,{ Component } from 'react';
import { View,Image,Text,FlatList,StyleSheet,TouchableOpacity, StatusBar,Dimensions, Button } from 'react-native';
import { RFPercentage } from "react-native-responsive-fontsize";
import Icon  from 'react-native-vector-icons/Feather';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class Zyka extends Component{
    constructor(){
        super();       
        this.state={
            items:0,
            total:0,
            mode:true,
            Data1:[
                {       
                    category:"Appitizers",
                    data1:[
                        {
                            title:"Bhel Puri",
                            price:3.00,
                            des:"tangy melange of rice crisps and lenti vermiceli tossed in chutney",
                            img:require('./noimage.png'),
                            quantity:0,                
                        },
                        {
                            title:"Pani Puri",
                            price:4.55,
                            des:"samosas spilt open and coverd with spicey chickpeas, minced onions",
                            img:require('./smdish.png'),
                            quantity:0,                 
                        },
                        {
                            title:"Bhel Puri",
                            price:3.00,
                            des:"tangy melange of rice crisps and lenti vermiceli tossed in chutney",
                            img:require('./noimage.png'),
                            quantity:0,                
                        },
                        {
                            title:"Pani Puri",
                            price:4.15,
                            des:"samosas spilt open and coverd with spicey chickpeas, minced onions",
                            img:require('./smdish.png'),
                            quantity:0,                 
                        },
                    ],   
                },
                {
                    category:"Snacks",
                    data1:[
                        {
                            title:"Alu Tikki with Chole",
                            price:2.00,
                            des:"potato patties served with chickpeas tamarind and mint chutneypotato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,                     
                        },
                        {
                            title:"Alu Tikki with Chole",
                            price:2.00,
                            des:"potato patties served with chickpeas tamarind and mint chutneypotato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,                     
                        },
                    ],
                    data2:[
                        {
                            title:"Alu Char Papri",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                        {
                            title:"Samosa Chat",
                            price:4.55,
                            des:"samosas spilt open and coverd with spicey chickpeas, minced onions",
                            img:require('./smdish.png'),
                            quantity:0,                 
                        },
                        {
                            title:"Alu Char Papri",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                    ],
                }
            ],
            Data2:[
                {       
                    category:"Fast Food",
                    data1:[
                        {
                            title:"Samosa Chat",
                            price:4.55,
                            des:"samosas spilt open and coverd with spicey chickpeas, minced onions",
                            img:require('./smdish.png'),
                            quantity:0,                 
                        },
                        {
                            title:"Samosa Chat",
                            price:4.55,
                            des:"samosas spilt open and coverd with spicey chickpeas, minced onions",
                            img:require('./noimage.png'),
                            quantity:0,                 
                        },
                        {
                            title:"Pizza",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                    ],
                    data2:[
                        {
                            title:"Pizza",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                        {
                            title:"Pizza",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                    ],
                },
                {
                    category:"Dinner",
                    data1:[
                        {
                            title:"Alu Char Papri1",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                        {
                            title:"Alu Char Papri1",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                        {
                            title:"Alu Tikki with Chole",
                            price:6.00,
                            des:"potato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,               
                        },
                        {
                            title:"Alu Tikki with Chole",
                            price:6.00,
                            des:"potato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,               
                        }
                    ],
                    data2:[
                        {
                            title:"Alu Char Papri",
                            price:5.00,
                            des:"A medly of chick peas, potaotes and flour crisps topped with chutney A medly of chick peas, potaotes and flour crisps topped with chutney",
                            img:require('./smdish.png'),
                            quantity:0,
                        },
                        {
                            title:"Alu Tikki with Chole",
                            price:6.00,
                            des:"potato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,               
                        },
                        {
                            title:"Alu Tikki with Chole",
                            price:6.00,
                            des:"potato patties served with chickpeas tamarind and mint chutney",
                            img:require('./smdish.png'),
                            quantity:0,               
                        }
                    ],
                }
            ],   
        }
    Dimensions.addEventListener('change',()=>{       
        if(Dimensions.get('window').height > Dimensions.get('window').width){
            this.setState({mode:true})
        }
        else{
            this.setState({mode:false})
        }
    })  
}

componentDidMount(){
    this.setState({Data1:this.state.Data1.concat(this.state.Data2)})
}
filterData=(value)=>{
    return value.filter((data, index) => value.findIndex(m => m.title == data.title && m.price==data.price)==index);
}
//********************************************************** ItemRenderFunction Start **********************************************************
renderItems=({item})=>(
    <View>
        <Text style={styles.appitizertext}>{item.category}</Text>
        {this.filterData(item.data1==undefined ? item.data2 : item.data2 == undefined ? item.data1 : item.data1.concat(item.data2)).map((sitem)=>
        {return( 
        <View style={styles.itemView}>
            <View style={styles.ItemImageView}>
                <Image source={sitem.img} style={styles.itemImage} />
            </View>
            <View style={this.state.mode ? styles.DesViewP : styles.DesViewL}>
                <Text numberOfLines={1} style={{fontWeight:'bold',fontSize:RFPercentage(2.1)}}>{sitem.title}</Text>
                <Text style={styles.pricetext}>${parseFloat(sitem.price).toFixed(2)}</Text>
                <View style={{justifyContent:'center'}}>
                    <Text numberOfLines={3} ellipsizeMode={'tail'} style={styles.ItemDesText}>{sitem.des}</Text>
                </View>
            </View>
            <View style={styles.btnView}>
                {sitem.quantity == 0 ? (
                <View>
                    <TouchableOpacity style={styles.Addbtn} onPress={()=>(this.setState({items:this.state.items + 1,total:this.state.total + sitem.price}),(sitem.quantity += 1))}>
                        <Text style={{...styles.btntext,fontSize:RFPercentage(2)}}>ADD +</Text>
                    </TouchableOpacity>
                </View>
                ):(
                <View style={styles.plusminus}>
                    <TouchableOpacity onPress={()=>(this.setState({items:this.state.items - 1, total:this.state.total - sitem.price}),(sitem.quantity -= 1))}>
                        <Text style={styles.btntext}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.btntext}>{sitem.quantity}</Text>                            
                    <TouchableOpacity onPress={()=>(this.setState({items:this.state.items + 1, total:this.state.total + sitem.price}),(sitem.quantity += 1))}>
                        <Text style={styles.btntext}>+</Text>
                    </TouchableOpacity>
                </View>
                )}
                <Text style={{fontSize:RFPercentage(1.2)}}>Customizable</Text>
                <View style={{alignSelf:'flex-end',margin:wp(2)}}>{sitem.quantity > 0 ? <Text style={styles.quantityView}>{sitem.quantity}</Text>: null}</View>
                
            </View>

        </View>)
        })} 
        
    </View>
)
// **********************************************************ItemRenderFunction Stop**********************************************************


    render(){
        
        return(     
            <View style={{flex:1}}>
                <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
                <View style={{elevation:8,backgroundColor:'#fff'}}>
                    <Image source={require('./dish1.png')} style={this.state.mode ? styles.headerImageP : styles.headerImageL } />
                    <View style={{height:hp(7.2),justifyContent:'center'}}><Text style={styles.zykaText}>Zyka{this.state.mode}</Text>
                    <Text style={styles.disText}>10410 Moncreiffe Road</Text></View>
                </View>

                <View style={styles.container}> 
                    <FlatList showsVerticalScrollIndicator={false} data={this.state.Data1} 
                        renderItem={this.renderItems}
                        keyExtractor={(item,index)=>item+index} 
                    />
                </View>
              
                 {this.state.items > 0 &&  
                <View style={ this.state.mode ? styles.footerP : styles.footerL}>
                    <View style={this.state.mode ? styles.totalBoxP : styles.totalBoxL }>
                        <View style={{justifyContent:'center'}}>

                            <Text style={{color:'#fff',fontSize:RFPercentage(1.8)}}>{this.state.items} ITEMS</Text>

                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.totalText}>${this.state.total.toFixed(2)}</Text>
                                <Text style={styles.TexesText}>  plus taxes</Text>
                            </View>
                          
                        </View>
                        <View style={{alignItems:'center',flexDirection:'row'}}>
                            <Text style={styles.totalText}>View Cart</Text>
                            <Icon name={'chevron-right'} size={hp(3)} color={'#fff'} />
                        </View>
                    </View>
                </View>}
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    zykaText:{
        fontSize:RFPercentage(2.5),
        fontWeight:'bold',
        paddingStart:15
    },
    disText:{
        fontSize:RFPercentage(1.8),
        color:'#7f7f7f',
        paddingStart:15
    },
    container:{
        flex:1,
        backgroundColor:'#f0f1f5',
        paddingTop:10,
        alignItems:'center'
    },
    totalText:{
        color:'#fff',
        fontSize:RFPercentage(2.7),
        fontWeight:'bold'
    },
    itemView:{
        flexDirection:'row',
        marginBottom:15,
        backgroundColor:'#fff',
        borderRadius:10,
        elevation:5
    },
    ItemDesText:{
        fontSize:RFPercentage(1.7),
        color:'#7f7f7f',
    },
   
    itemImage:{
        borderRadius:10,
        height:hp(13.1),
        width:wp(26),
        margin:wp(2)
    },
    Addbtn:{
        borderWidth:1,
        borderColor:'#ff914c',
        width:wp(18),
        padding:2
    },
    btntext:{
        textAlign:'center',
        fontSize:RFPercentage(2.4),
        paddingHorizontal:7,
        
    },
    appitizertext:{
        fontWeight:'bold',
        fontSize:RFPercentage(2.6),
        paddingBottom:10
    },
    pricetext:{
        fontWeight:'bold',
        color:'#ff4f00',
        fontSize:RFPercentage(1.9)
    },
    plusminus:{
        borderWidth:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        borderColor:'#ff914c',
        width:wp(18)
    },
    TexesText:{
        color:'#fff',
        paddingTop:2,
        fontSize:RFPercentage(1.9)
    },
    btnView:{
        width:wp(22),
        alignItems:'center',
        marginTop:hp(2)
    },
    quantityView:
    {
        color:'#fff',
        backgroundColor:'#ff914c',
        borderRadius:5,
        fontSize:RFPercentage(2.1),
        paddingHorizontal:wp(1.5)
    },
    DesViewP:{
        padding:wp(1),
        paddingLeft:0,
        width:wp(40)
    },
    DesViewL:{
        padding:wp(1),
        paddingLeft:0,
        width:'70%',
    },
    headerImageP:{
        height:hp(23),
        resizeMode:'cover',
        width:wp(100)
    },
    headerImageL:{
        height:hp(8),
        width:'100%',
    },
    totalBoxP:{
        height:hp(8),
        width:wp(92),
        backgroundColor:'#ff914c',
        borderRadius:10,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10
    },
    totalBoxL:{
        height:hp(6),
        width:'94%',
        backgroundColor:'#ff914c',
        borderRadius:10,
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:10
    },
    footerP:{
        height:hp(10),
        justifyContent:'center',
        alignItems:'center'
    },
    footerL:{
        height:hp(8),
        justifyContent:'center',
        alignItems:'center'
    },
    SplashScreen_RootView:  
    {  
        flex:1,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
        backgroundColor:'#ff914c'
    },  

    
})
export default Zyka;