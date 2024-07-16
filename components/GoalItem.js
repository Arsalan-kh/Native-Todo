import { StyleSheet, View, Text, Pressable, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


const GoalItem = (props) => {
    return (
        <View
            android_ripple={{ color: "#dddddd" }}
        >
            <View style={styles.goalItem} >
                <Text style={styles.goalText}>{props.length} {props.text}  </Text>
                <View style={styles.iconContainer} >
                    <Icon onPress={props.onDeleteItem.bind(this, props.id)} name="delete" size={25} color="red" />
                    {/* <Icon onPress={props.onEditItem.bind(this, props.id)} name="edit" size={25} color="red" /> */}
                </View>

            </View>
        </View>
    )
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 10,
        borderRadius: 4,
        backgroundColor: "#f0eeee",
        justifyContent: "space-between",
        flexDirection: "row",
    },
    goalText: {
        color: "#1b1b1b"
    },
    iconContainer:{
        flexDirection:"row",
justifyContent:"space-around",
gap:13,
    }

})