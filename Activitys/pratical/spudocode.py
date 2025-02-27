python

user_1 = input("user 1 enter your hand, 0 = rock, 1 paper, 2 = sicors")
user_2 = input("user 2 enter your hand, 0 = rock, 1 paper, 2 = sicors")


def check_side(user_1,user_2){
	if(user_1 == user_2){print("draw")}:else
	if(user_1>user_2 | (user_1==rock&user_2==sicors)){print("user1 wins")}:else{
	print("user 2 wins")
	}
}