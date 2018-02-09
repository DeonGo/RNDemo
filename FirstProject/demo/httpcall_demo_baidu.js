import React, { Component } from "react";
import { ActivityIndicator, Animated, FlatList, ScrollView, StyleSheet, Text, View } from "react-native";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const REQUEST_URL = 'https://api.github.com/search/repositories?q=javascript&sort=stars';

export default class FlatListExample extends Component {
    static navigationOptions = {
        title: 'FlatListExample',
    }

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            //网络请求状态
            error: false,
            errorInfo: "",
            dataArray: [],
            count: 3,
        }
    }

    //网络请求
     fetchData() {
        // 这个是js的访问网络的方法
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.items;
                let dataBlob = [];
                let i = 0;
                data.map(function (item) {
                    dataBlob.push({
                        key: i,
                        value: item,
                    })
                    i++;
                });
                let size = Math.min(3, dataBlob.length)
                this.setState({
                    //复制数据源
                    
                    count: size,
                    dataArray: dataBlob,
                    isLoading: false,
                });
                data = null;
                dataBlob = null;
            })
            .catch((error) => {
                this.setState({
                    error: true,
                    errorInfo: error
                })
            })
            .done();
        // try {
        //     let response = await fetch(REQUEST_URL);
        //     let responseData = await response.json;
    
        //     // let data = await responseData.items;
        //     let dataBlob = [];
        //     let i = 0;
        //     responseData.items.map(function (item) {
        //         dataBlob.push({
        //             key: i,
        //             value: item,
        //         })
        //         i++;
        //     });
        //     this.setState({
        //         //复制数据源
        //         dataArray: dataBlob,
        //         isLoading: false,
        //     });
        //     data = null;
        //     dataBlob = null;
        // } catch (error) {
        //     console.error(error);
        // }
        
    }

    componentDidMount() {
        //请求数据
        this.fetchData();
    }

    componentWillReceiveProps(nextProps){

    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }
    

    //加载等待的view
    renderLoadingView() {
        return (
            <View style={styles.container}>
                <ActivityIndicator
                    animating={true}
                    style={[styles.gray, { height: 80 }]}
                    color='red'
                    size="large"
                />
            </View>
        );
    }

    //加载失败view
    renderErrorView(error) {
        return (
            <View style={styles.container}>
                <Text>
                    Fail: {error}
                </Text>
            </View>
        );
    }

    //返回itemView
    renderItemView({ item }) {
        return (
            <View>
                <Text style={styles.title}>name: {item.value.name} ({item.value.stargazers_count}
                    stars)</Text>
                <Text style={styles.content}>description: {item.value.description}</Text>
            </View>
        );
    }

    renderData() {
        return (
            <ScrollView >
                <Text >
                    Data: {this.state.count}
                </Text>
                <AnimatedFlatList
                    data={this.state.dataArray}
                    renderItem={this.renderItemView}
                />
            </ScrollView>
        );
    }

    render() {
        //第一次加载等待的view
        if (this.state.isLoading && !this.state.error) {
            return this.renderLoadingView();
        } else if (this.state.error) {
            //请求失败view
            return this.renderErrorView(this.state.errorInfo);
        }
        //加载数据
        return this.renderData();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    title: {
        fontSize: 15,
        color: 'blue',
    },
    content: {
        fontSize: 15,
        color: 'black',
    }

});
