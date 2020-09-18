import {PassportStrategy} from "@nestjs/passport";
import {IStrategyOptions, Strategy} from "passport-local";
import {InjectModel} from "nestjs-typegoose";
import {User} from "@libs/db/models/user.model";
import {ReturnModelType} from "@typegoose/typegoose";
import {BadRequestException} from "@nestjs/common";
import {compareSync} from "bcryptjs";
export class LocalStrategy extends PassportStrategy(Strategy,"local"){
    constructor(
        @InjectModel(User) private userModel:ReturnModelType<typeof User>
    ) {
        super({
            usernameField:"username",
            passwordField:"password"
        } as IStrategyOptions);
    }

    async validate(username:any,password:any){
        const user=await this.userModel.findOne({username}).select("+password")
        if(!user){
            throw new BadRequestException("用户名不正确")
        }
        // console.log(user)
        // // console.log(password)
        if(!compareSync(password,user.password)){
            throw new BadRequestException("用户密码密码不正确")

        }
        return user;
    }
}