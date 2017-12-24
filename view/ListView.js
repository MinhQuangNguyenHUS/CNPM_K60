import React, {Component} from 'react';
import {View} from 'react-native';
import TodoModel from '../component/TodoModel';
import OmniBox from '../component/OmniBox';
import SortableListView from 'react-native-sortable-listview';
import ListViewItem from '../component/ListViewItem';
import Utils from '../component/Utils';

let dataList = [
    new TodoModel('Hello All'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club'),
    new TodoModel('Meet at ABC club')
];

var dataListOrder = getOrder(dataList);

function getOrder(list) {
    return Object.keys(list);
}

function moveOrderItem(listView, fromIndex, toIndex) {
    Utils.move(dataListOrder, parseInt(fromIndex), parseInt(toIndex));
    if (listView.forceUpdate) listView.forceUpdate();
}

export default class ListView extends Component {
    constructor(props) {
        super(props);
        this.updateDataList = this.updateDataList.bind(this);
        this._onCompletedChange = this._onCompletedChange.bind(this);
        this.state = {
            dataList: dataList
        }
    }

    updateDataList(dataList) {
        dataListOrder = getOrder(dataList);
        this.setState({
            dataList: dataList
        });
    }

    _onCompletedChange(dataItem, index) {
        let fromIndex = dataListOrder.indexOf(index);
        let toIndex = dataItem.completed ? dataListOrder.length - 1 : 0;
        moveOrderItem(this, fromIndex, toIndex);
    }

    render() {
        let listView = (<View></View>);
        if (this.state.dataList.length) {
            listView = (
                <SortableListView
                    ref='listView'
                    style={{flex: 1}}
                    data={this.state.dataList}
                    order={dataListOrder}
                    onRowMoved={e => moveOrderItem(this, e.from, e.to)}
                    renderRow={(dataItem, section, index) => <ListViewItem data={dataItem} dataIndex={index}
                                                                           onCompletedChange={this._onCompletedChange}/>}
                />
            );
        }

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                paddingTop: 30,
                paddingBottom: 10,
                paddingLeft: 2,
                paddingRight: 2,
                backgroundColor: '#F8F8F8',
            }}>
                <View style={{flex: 1, marginLeft: 10, marginRight: 10}}>
                    <OmniBox
                        data={dataList}
                        updateDataList={this.updateDataList}/>
                    {listView}
                </View>
            </View>
        )
    }
};
