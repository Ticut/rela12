import{m as n,j as e,L as d}from"./app-BoyQxbrk.js";import{L as c,I as p,a as x}from"./label-DTNr9MlU.js";import{T as u}from"./text-link-DwRWRsFN.js";import{B as j}from"./app-logo-icon-F4fkkBWW.js";import{A as f,L as h}from"./auth-layout-Cp0XuWXY.js";import"./index-BrmkPwKy.js";function b({status:a}){const{data:r,setData:i,post:o,processing:t,errors:l}=n({email:""}),m=s=>{s.preventDefault(),o(route("password.email"))};return e.jsxs(f,{title:"Forgot password",description:"Enter your email to receive a password reset link",children:[e.jsx(d,{title:"Forgot password"}),a&&e.jsx("div",{className:"mb-4 text-center text-sm font-medium text-green-600",children:a}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("form",{onSubmit:m,children:[e.jsxs("div",{className:"grid gap-2",children:[e.jsx(c,{htmlFor:"email",children:"Email address"}),e.jsx(p,{id:"email",type:"email",name:"email",autoComplete:"off",value:r.email,autoFocus:!0,onChange:s=>i("email",s.target.value),placeholder:"email@example.com"}),e.jsx(x,{message:l.email})]}),e.jsx("div",{className:"my-6 flex items-center justify-start",children:e.jsxs(j,{className:"w-full",disabled:t,children:[t&&e.jsx(h,{className:"h-4 w-4 animate-spin"}),"Email password reset link"]})})]}),e.jsxs("div",{className:"text-muted-foreground space-x-1 text-center text-sm",children:[e.jsx("span",{children:"Or, return to"}),e.jsx(u,{href:route("login"),children:"log in"})]})]})]})}export{b as default};
