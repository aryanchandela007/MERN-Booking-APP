import jwt from 'jsonwebtoken';
import { createError } from '../utils/error.js';

export const verifyToken= (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token)
    {
        return next(createError(401,"Your are not Authenticated!"));
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err)
        {
            return next(createError(403,"Token is not valid!"));
        }
        req.user=user;
        next();
    })
}


export const verifyUser =(req,res,next)=>{
    // res,next,
    verifyToken(req,res,()=>{
        if(req.user.id=== req.params.id || req.user.isAdmin)
        {
            next()
        }
        else{
            return next(createError(403,"You are not authorized!"));
        }
    })
}

export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.isAdmin)
        { 
            next()
        }
        else{
            return next(createError(403,"You are not admin!"));
        }
    })
}



/*
401 Unauthorized response status code indicates that the
client request has not been completed because it lacks
valid authentication credentials for the requested resource.

403 Forbidden response status code indicates
 that the server understands the request but refuses 
 to authorize it.
*/