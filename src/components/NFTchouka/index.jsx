import React, { Component } from "react";
import "./index.scss";

import { Mask, Toast } from "antd-mobile";
import bdBoxBg from "@/static/image/home/bangding-bg.png";
import closeImg from "@/static/image/icon/close.png";
import frontImg from "@/static/image/chouka/front.png";

export default class NFTchouka extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectNav: "HOS",
			maskShow: false,
			choukaLoading: false, // 抽卡过程中的Mask
		};
	}
	render() {
		return (
			<div className="chouka-page">
				<div className="chouka-nav-box">
					<div
						className={`chouka-nav ${
							this.state.selectNav === "HOS" ? "chouka-nav-select" : ""
						}`}
						onClick={() => {
							this.setState({ selectNav: "HOS" });
						}}
					>
						HOS抽卡
					</div>
					<div
						className={`chouka-nav ${
							this.state.selectNav === "nengliang" ? "chouka-nav-select" : ""
						}`}
						onClick={() => {
							this.setState({ selectNav: "nengliang" });
						}}
					>
						能量石抽卡
					</div>
				</div>
				<div className="chouka-main">
					<div className="chouka-bg">
						<div className="main-img"></div>
						<div
							className="main-btn"
							onClick={() => {
								this.setState({ maskShow: true });
							}}
						>
							HOS抽卡
						</div>
					</div>
				</div>
				<Mask visible={this.state.maskShow} opacity={0.8}>
					<div
						className="up-mask chouka-mask"
						style={{ backgroundImage: `url(${bdBoxBg})` }}
					>
						<div className="mask-title">提示</div>
						<img
							onClick={() => {
								this.setState({ maskShow: false });
							}}
							className="close"
							src={closeImg}
							alt=""
						/>

						<div className="up-waring">需要消耗120HOS</div>
						<div
							className="up-btn"
							onClick={() => {
								this.sendCharge();
							}}
						>
							确定
						</div>
					</div>
				</Mask>
				<Mask visible={this.state.choukaLoading} opacity={0.8}>
					<div className="card-box">
                        <div className="container">
                            <div className="flip">
                                <img className="front" src={frontImg} alt="" />
                                <img className="back" src={frontImg} alt="" />
                            </div>
                        </div>
                    </div>
				</Mask>
			</div>
		);
	}
	// 花费手续费
	sendCharge = () => {
		Toast.show({
			icon: "loading",
			maskClickable: false,
			duration: 0,
		});
		setTimeout(() => {
			this.setState(
				{
					maskShow: false,
					choukaLoading: true,
				},
				() => {
					Toast.clear();
				}
			);
		}, 1000);
	};
}
