with open('result.txt','r',encoding='utf-8') as f:
    r=[i.strip('\n') for i in f.readlines()]

r=dict([i.split(' ')for i in r])

u="<ul>"

h="<li style='color:{c};'>{n}:{c}</li>"
for k,v in r.items():
    u+='\n'+h.format(n=k,c=v)
u+='\n</ul>'

with open('html.html','w',encoding='utf-8') as w:
    w.write(u)