import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import Svg, {Image, Circle, ClipPath} from 'react-native-svg';
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
const closeButtonTop = -height / 2 ;
const {
  Value,
  event,
  block,
  cond,
  eq,
  set,
  Clock,
  startClock,
  stopClock,
  debug,
  timing,
  clockRunning,
  interpolate,
  Extrapolate,
  concat
} = Animated;

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0)
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: Easing.inOut(Easing.ease)
  };

  return Animated.block([
    Animated.cond(Animated.clockRunning(clock), 0, [
      Animated.set(state.finished, 0),
      Animated.set(state.time, 0),
      Animated.set(state.position, value),
      Animated.set(state.frameTime, 0),
      Animated.set(config.toValue, dest),
      Animated.startClock(clock)
    ]),
    Animated.timing(clock, state, config),
    Animated.cond(state.finished, Animated.debug('stop clock', Animated.stopClock(clock))),
    state.position
  ]);
}
class LoginScreen extends Component {
  constructor() {
    super();

    this.buttonOpacity = new Value(1);

    this.onStateChange = Animated.event([
      {
        nativeEvent: ({ state }) =>
          Animated.block([
            Animated.cond(
              Animated.eq(state, State.END),
              Animated.set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
            )
          ])
      }
    ]);

    this.onCloseState = Animated.event([
      {
        nativeEvent: ({ state }) =>
          Animated.block([
            Animated.cond(
              Animated.eq(state, State.END),
              Animated.set(this.buttonOpacity, runTiming(new Clock(), 0, 1))
            )
          ])
      }
    ]);

    this.buttonY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [100, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.bgY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [-height / 2 , -1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputZindex = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1,-1],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputY = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [0, 100],
      extrapolate: Extrapolate.CLAMP
    });

    this.textInputOpacity = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: Extrapolate.CLAMP
    });

    this.rotateCross = interpolate(this.buttonOpacity, {
      inputRange: [0, 1],
      outputRange: [180, 360],
      extrapolate: Extrapolate.CLAMP
    });

  }
  render() {
    const { navigation } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'flex-end'
        }}
      >
        <Animated.View
          style={{
            ...StyleSheet.absoluteFill,
            transform: [{ translateY: this.bgY }]
          }}
        >
        <Svg height={height} width={width}>
          <ClipPath id="clip">
            <Circle r="50"/>
            </ClipPath>
          <Image
              href={require('../assets/chicago-backdrop.jpg')}
              height= {height}
              width= {width}
              preserveAspectRatio= "xMidYMid slice"
              ClipPath= "url(#clip)"
          />
        </Svg>
        </Animated.View>
        <View style={{ height: height / 3, justifyContent: 'center' }}>
          <TapGestureHandler onHandlerStateChange={this.onStateChange}>
            <Animated.View
              style={{
                ...styles.button,
                opacity: this.buttonOpacity,
                transform: [{ translateY: this.buttonY }]
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>REGISTER</Text>
            </Animated.View>
          </TapGestureHandler>
          <Animated.View
            style={{
              ...styles.button,
              backgroundColor: '#cf0808',
              opacity: this.buttonOpacity,
              transform: [{ translateY: this.buttonY }]
            }}
          >
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
                SIGN INTO FLEX
              </Text>
          </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{
            zIndex:this.textInputZindex,
            opacity:this.textInputOpacity,
            transform:[{translateY:this.textInputY}],
            height:height/1.6,
            ...StyleSheet.absoluteFill,
            top:null,
            justifyContent:'center',
            backgroundColor: 'white'}}>

            <TapGestureHandler onHandlerStateChange={this.onCloseState}>
              <Animated.View style={styles.closeButton}>
                <Animated.Text
                  style=  {{
                    fontSize: 25,
                    transform:[{rotate: concat(this.rotateCross,'deg')}]
                  }}
                >X
                </Animated.Text>
              </Animated.View>
            </TapGestureHandler>

            <TextInput
              placeholder="PHONE#"
              style={styles.textInput}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="email#"
              style={styles.textInput}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="USER"
              style={styles.textInput}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="PASSWORD"
              style={styles.textInput}
              placeholderTextColor="black"
            />
            <TextInput
              placeholder="CONFIRM PASSWORD"
              style={styles.textInput}
              placeholderTextColor="black"
            />
            <Animated.View style={styles.button}>
              <Text style={{fontSize:20,fontWeight:'bold'}}>REGISTER</Text>
            </Animated.View>
          </Animated.View>
        </View>
      </View>
    );
  }
}
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset:{
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  signInButton: {
    opacity: 100,
    backgroundColor: 'white',
    height: 70,
    marginHorizontal: 20,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    shadowOffset:{
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor:'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -30,
    left: width / 2 - 20,
    shadowOffset:{
      width: 2,
      height: 2
    },
    shadowColor: 'black',
    shadowOpacity: 0.2
  },
  textInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: 'rgba(0,0,0,0.2)',
  }
});
