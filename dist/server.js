"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({
        success: true,
        message: "Hello from Library management server"
    });
});
async function server() {
    try {
        await mongoose_1.default.connect(config_1.default.database_url);
        app.listen(config_1.default.port, () => {
            console.log(` server is running on ${config_1.default.port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
}
server();
//# sourceMappingURL=server.js.map