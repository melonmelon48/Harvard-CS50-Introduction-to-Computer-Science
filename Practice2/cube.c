#include <cs50.h>
#include <stdio.h>


int cube(int n);

int main(void)
{
    int side = get_int("Side Length: ");
    int volume = cube(side);
    printf("the volume is: %i\n", volume);
}

int cube(int n)
{
    int cubed = n * n * n;
    return cubed;
}
