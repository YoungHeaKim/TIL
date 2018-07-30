1. 처음에 fork를 한다.  

2. 자신의 컴퓨터에서 클론을 한다.  
```
git clone (자신의 github에서 clone 주소)
```

3. 클론이 된 폴더로 들어간다.
```
cd (해당폴더)
```

4. 터미널에서 orgin으로 github와 연결을 해준다.(생략가능)
```
git remote add origin (자신의 github에서 clone 주소)
```

5. 잘 연결이 되었는지 확인
```
git remote -v
```
결과값
```
origin	https://github.com/YoungHeaKim/to-do-list.git (fetch)
origin	https://github.com/YoungHeaKim/to-do-list.git (push)
```

6. fork를 뜬 사람의 주소로 들어가서 clone 주소 복사하여 연결 시켜준다.
```
git remote add (자유롭게 origin과 다른이름을 생성 ex: upstream 등등)  (fork를 해 온 사람의 주소로 가서 클론주소)
```

7. 잘 연결이 되었는지 확인
```
git remote -v
```
결과값
```
\origin	https://github.com/YoungHeaKim/to-do-list.git (fetch)
origin	https://github.com/YoungHeaKim/to-do-list.git (push)
upstream	https://github.com/seultt/to-do-list.git (fetch)
upstream	https://github.com/seultt/to-do-list.git (push)
```

8. 연결이 되었으면 branch를 생성해준다.  
```
git checkout -b (branch이름)
```

9. 해당 branch로 왔는지 확인을 위하여 밑의 코드 작성
```
git branch
```

10. test 파일 만들고 branch로 올라가는지 확인을 위해 add, commit을 하고 push를 할때 밑의 코드를 작성
```
git push --set-upstream origin (branch이름)
```

- - -
다른사람이 자신의 repository에서 가져갔을 경우
- - -
1. 다른 사람과 연결을 해야하기 떄문에
```
git remote add (자유롭게 origin과 다른이름을 생성 ex: upstream 등등)  (fork를 한 사람의 주소로 가서 클론주소)
```

2. 연결되었는지 확인
```
git remote -v
```

- - -
pull을 할 경우
- - - 

자신의 repository에 다른사람이 가져간 사람은 그냥 pull이 가능하다.
```
git pull
```

자신이 fork를 한 경우에는 
```
git pull (위에서 지정해준 이름) (그 지정해준 이름의 브런치 이름)
```
ex) 만약 위에서 (위에서 지정해준 이름)이 upstream이고 (그 지정해준 이름의 브런치 이름)이 her인 경우
```
git pull upstream her
```