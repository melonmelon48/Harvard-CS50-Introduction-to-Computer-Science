#include <cs50.h>
#include <stdio.h>

void meow(int n);

int main(void)
{
    int number = get_int("Number of meows: ");
    meow(number);
}

void meow(int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("meow!\n");
    }
}
