#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int x = get_int("x: ");
    int y = get_int("y: ");

    if (x >y)
    {
        printf("x is greater than y\n");
    }
    else if (y>x)
    {
        printf("y is greater than x\n");

    }
    else if (x==y)
    {
        printf("x is equal to y\n");
    }
}
