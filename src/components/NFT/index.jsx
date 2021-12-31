/*
 * @Author: your name
 * @Date: 2021-12-29 10:54:56
 * @LastEditTime: 2021-12-29 17:29:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rhos/src/components/NFT/index.js
 */
import React, { Component } from "react";
import "./index.scss";
// import ctx from "@/config/context.js"

export default class NFTpage extends Component {
	constructor(props) {
		super(props);
		this.state = {};
        
	}
	// 上下文
	// static contextType = ctx
	componentDidMount() {
		// console.log(this.context)
		console.log(this.props.location.state);
	}
	render() {
		return (
			<div className="nft-page">
				<div className="nft-game">NFT游戏（占位）</div>
				<div className="nft-nav">
					<div className="nft-nav-item" onClick={() => {
                        this.props.history.push('/default/nft/chouka')
                    }}>
						<div className="nft-nav-item-img"></div>
						<div className="nft-nav-item-name">NFT抽卡</div>
					</div>
					<div className="nft-nav-item" onClick={() => {
                        this.props.history.push('/default/nft/cardlist')
                    }}>
						<div className="nft-nav-item-img"></div>
						<div className="nft-nav-item-name">我的卡包</div>
					</div>
				</div>
                <div className="nft-game">NFT交易（占位）</div>
			</div>
		);
	}
}
