import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center', // Center horizontally
        justifyContent: 'center', // Center vertically
        padding: 20,
    },
    titre : {
        fontWeight : 'bold',
        fontSize : 24,
        textAlign : 'left',
        marginTop : 30,
        marginLeft : 20,
        marginBottom :20
    },
    input: {
        height: 50,
        width: 500,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        margin: 12,
        padding: 10,
    },
    countText: {
        fontSize: 18,
        marginTop: 30,
        marginLeft: 10,
        color: '#333',
    },
    btnCheck: {
        width: 100,
        backgroundColor: '#007bff',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
        alignSelf: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    buttonContainer: {
        alignItems : 'center',
        flexDirection : 'row',
        marginRight: 50,
    },
    btnAffichage: {
        width: 80,  // Boutons plus petits
        backgroundColor: '#007bff',
        paddingVertical: 10,  // Moins de padding vertical pour des boutons plus petits
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    btnHome: {
        width: 150,  // Boutons plus petits
        backgroundColor: '#007bff',
        paddingVertical: 10,  // Moins de padding vertical pour des boutons plus petits
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
    },
    content: {
        flexDirection: 'row',
        marginTop : '5%'
    },
    text : {
        margin : 10,
        fontSize: 20,
        color : 'gray'
    },
    addView:{
        alignItems : 'center',
        flexDirection : 'row',
    },
    item : {
        width:500,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent: 'space-between',
        marginTop : 15,
        backgroundColor : '#fff',
        padding : 10,
        borderRadius : 7,
        borderStyle : "solid",
        borderWidth : 2,
        borderColor : '#DCDCDC',
        backgroundColor: '#DCDCDC',
    },
    itemText:{
        fontSize : 20,
        color : 'black',
        marginLeft : 10,
    },
    elementGauche:{
        flexDirection : 'row',
        alignItems : 'center',
        flexWrap : 'wrap'
    },
    list: {
        minWidth: 400,          // Minimum width of the list
        maxWidth: '90%',        // Maximum width set to 90% of the screen width
        flexGrow: 1,            // Allows the list to grow to take up available space
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 7,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#DCDCDC',
        backgroundColor: '#DCDCDC',
    },
    progressContainer: {
        margin : 20,
        flexDirection: 'row', // Aligne les éléments horizontalement
        alignItems: 'center', // Centre verticalement les éléments
    },
    progress: {
        //width: '150%', // Ajuste la largeur pour l’agrandir
        height: 20, // Augmente la hauteur de la barre
        backgroundColor: '#e0e0e0',
        borderRadius: 5, // Ajoute un effet arrondi
        overflow: 'hidden', // Masque les débordements
    },
    textProgress: {
        marginLeft: 10, // Espace entre la barre et le texte
        fontSize: 16, // Taille du texte
        color: '#000', // Couleur du texte
    },
    exportButtons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 10,
    },
    exportBtn: {
        marginHorizontal: 5,
        padding: 5,
        backgroundColor: "#f0f0f0",
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
    },
        
    
    
});

export const tabBarStyles = {
    tabBarStyle: {
      backgroundColor: '#B0C4DE',
      height: 70,
    },
    tabBarLabelStyle: {
      fontSize: 16,
      paddingBottom: 10,
    },
    tabBarActiveTintColor: '#000080',
    tabBarInactiveTintColor: 'white',
  };
  
export default styles;