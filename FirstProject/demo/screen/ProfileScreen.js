
import React from 'react';
import { Button, Animated } from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });
  render() {
    const { goBack } = this.props.navigation;
    return (
      <FadeInView>
        <Button
          title="Go back"
          onPress={() => goBack()}
        />
      </FadeInView>
    );
  }
}

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
  }
  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1,                             // 透明度最终变为1，即完全不透明
      }
    ).start();                                  // 开始执行动画
  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}



export default ProfileScreen;