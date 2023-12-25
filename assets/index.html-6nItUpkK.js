import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as n,c as s,a as e,b as r,e as l}from"./app-1ZTmwhuN.js";const d={},i=e("h1",{id:"vasp-运行中的错误",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vasp-运行中的错误","aria-hidden":"true"},"#"),r(" VASP 运行中的错误")],-1),c=e("h2",{id:"error-edddav-call-to-zhegv-failed-returncode-xx",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#error-edddav-call-to-zhegv-failed-returncode-xx","aria-hidden":"true"},"#"),r(" Error EDDDAV: Call to ZHEGV failed. Returncode = xx")],-1),h=e("p",null,"这是对角化例程的错误。您可以尝试切换到不同的方法（即 ALGO）或使用倒数第二步的位置而不是最后一步。查看结构（例如在 VESTA 中）以确保它仍然看起来像您期望的那样也很有帮助。偶尔会发生两个原子在弛豫过程中彼此靠近的情况。特别要检查离子循环内的所有电子迭代是否收敛。",-1),u={href:"https://www.vasp.at/forum/viewtopic.php?t=10409#p19031",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"forrtl-severe-174-sigsegv-segmentation-fault-occurred",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#forrtl-severe-174-sigsegv-segmentation-fault-occurred","aria-hidden":"true"},"#"),r(" forrtl: severe (174): SIGSEGV, segmentation fault occurred")],-1),f=e("p",null,[r("分段错误，疑似是系统堆栈限制过小导致，使用 "),e("code",null,"ulimit -s unlimited"),r(" 解决，但这只能解决当前 shell 的 mpirun，不能解决下次登录 shell 运行 mpirun 以及 PBS 调度计算节点的堆栈大小。")],-1),p=e("p",null,[r("参考 "),e("a",{href:"../../03.Linux/PBS#%E8%A7%A3%E9%99%A4%E5%A0%86%E6%A0%88%E5%A4%A7%E5%B0%8F%E9%99%90%E5%88%B6"},"PBS 解除堆栈大小限制"),r(" 解决。")],-1);function x(E,m){const t=a("ExternalLinkIcon");return n(),s("div",null,[i,c,h,e("p",null,[r("参考："),e("a",u,[r('Re: on solving "Error EDDDAV: Call to ZHEGV failed. Returncode = xx" (vasp.at)'),l(t)])]),_,f,p])}const g=o(d,[["render",x],["__file","index.html.vue"]]);export{g as default};
