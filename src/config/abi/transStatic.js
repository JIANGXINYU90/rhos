/*
 * @Author: your name
 * @Date: 2021-11-29 16:33:25
 * @LastEditTime: 2021-12-16 16:14:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /rhos/src/config/abi/transStatic.js
 */

import Web3 from "web3";
import contractAbi from "./zhiya.abi.json";
import allContractAddress from './contractAddress'
// UI
import { Toast } from "antd-mobile";


 // 私钥
 const privateKey = "9f7f8e405f83d3b6ba02455a9bad2c549c4bde6a26e6712c5779129addc745ed";
 // 私钥地址
 const fromAddress = "0xd3C6F0f03094E930b387d71698020b94a1b55EFA";
 // GAS费限制
 const gas = "202999";

function transStatic(user_address, user_static_num) {
    if(!user_address || !user_address) {
        Toast.show({
            icon: 'fail',
            content: '参数不全'
        })
        return
    }
    Toast.show({
        icon: 'loading',
        maskClickable: false,
        duration: 0
    })
    return new Promise((resolve, reject) => {
        // 质押合约地址
		const contractAddress = allContractAddress.zyContractAddress;
        // 用户地址
		const toAddress = user_address;
       
        // 数量
		const amount = user_static_num;
        const provider = window['ethereum'] || window.web3.currentProvider
		const web3 = new Web3(provider);
        // 创建随机数，创建订单编号
        const data_time = new Date().getTime()
        const random_1 = parseInt(Math.random() * Math.random() * 100) + ''
        const random_2 = parseInt(Math.random() * Math.random() * 100) + ''
        const orderNo = data_time + random_1 + random_2

        // 连接合约abi
		const myContract = new web3.eth.Contract(contractAbi.abi, contractAddress, {
            from: fromAddress
        });
		const tx = {
            // 私钥地址
			from: fromAddress,
            // 质押合约地址
			to: contractAddress,
			gas: gas,
			value: "0x0",
			data: myContract.methods.extraProfit(toAddress, amount, orderNo).encodeABI(),
		};

        // 使用私钥签名以太坊交易
		const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
		signPromise
			.then((signedTx) => {
				console.log(signedTx);
                // 广播
				const sentTx = web3.eth.sendSignedTransaction(
					signedTx.raw || signedTx.rawTransaction
				);
				sentTx.on("receipt", (receipt) => {
					console.log(receipt);
                    Toast.show({
                        icon: 'success',
                        content: '领取成功'
                    })
                    resolve(receipt)
				});
				sentTx.on("error", (err) => {
					console.log('广播失败',err);
                    Toast.show({
                        icon: 'fail',
                        content: '领取失败'
                    })
                    reject(err)
				});
			})
			.catch((err) => {
				console.log("签名失败", err);
                Toast.show({
                    icon: 'fail',
                    content: '签名失败'
                })
                reject(err)
			});
    })
}

export {transStatic};