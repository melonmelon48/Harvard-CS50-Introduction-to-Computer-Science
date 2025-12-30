#include <cs50.h>
#include <ctype.h>
#include <stdio.h>
#include <string.h>

bool valid(string password);

int main(void)
{
    string password = get_string("Enter your password: ");
    if (valid(password))
    {
        printf("Your password is valid!\n");
    }
    else
    {
        printf("Your password needs at least one uppercase letter, lowercase letter, number and "
               "symbol.\n");
    }
}

// boolean
bool valid(string password)

{
    bool hasupper = false;
    bool haslower = false;
    bool hasnumber = false;
    bool hassymbol = false;
    for (int i = 0; i < strlen(password); i++)
    {
        if (isupper(password[i]))
        {
            hasupper = true;
        }
        else if (islower(password[i]))
        {
            haslower = true;
        }
        else if (isdigit(password[i]))
        {
            hasnumber = true;
        }
        else if (ispunct(password[i]))
        {
            hassymbol = true;
        }
        if (hasupper && haslower && hasnumber && hassymbol)
        {
            return true;
        }
    }
    return false;
}
