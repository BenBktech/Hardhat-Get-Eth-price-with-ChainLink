const { assert, expect } = require("chai")
const { network, deployments, ethers } = require("hardhat")
const { developmentChains } = require("../../helper-hardhat-config")

!developmentChains.includes(network.name)
    ? describe.skip
    : describe("Dynamic SVG NFT Unit Tests", function () {
        let getEthPrice, deployer, mockV3Aggregator, accounts

        beforeEach(async () => {
            accounts = await ethers.getSigners()
            deployer = accounts[0]
            await deployments.fixture(["mocks", "getEthPrice"])
            getEthPrice = await ethers.getContract("getEthPrice")
            mockV3Aggregator = await ethers.getContract("MockV3Aggregator")
        })
        
        describe("getEthPrice", async function() {
            it("should get the Eth Price in USD", async function() {
                let price = await getEthPrice.getEthPriceInUSD()
                console.log(price.toString())
            })
        })
    })