import React, { Component } from 'react'
import {
    Text, StatusBar, TabBarIOS, View
} from 'react-native'

StatusBar.setHidden(true);

export default class DoubanPro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: '图书'
        }
    };

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title='图书'
                    selected={this.state.selectedTab === "图书"}
                    onPress={() => {
                        this.setState({
                            selectedTab: '图书'
                        })
                    }}
                    icon = {require("../img/book.png")} >
                    <View style={{ backgroundColor: "red" }}></View>
                </TabBarIOS.Item>

                {/* <TabBarIOSItem
                    title='电影'
                    selected={this.state.selectedTab === "电影"}
                    onPress={() => {
                        this.setState({
                            selectedTab: '电影'
                        })
                    }}
                    icon = {require("../img/movie.png")}  
                    
                >
                    <View style={{ backgroundColor: "black" }}></View>
                </TabBarIOSItem> */}
            </TabBarIOS>

        )
    }

};