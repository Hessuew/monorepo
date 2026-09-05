import { ShineBorder } from '~/components/magicui/shine-border';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card';

export function CardDemo() {
  return (
    <Card className='relative overflow-hidden max-w-[350px] w-full'>
      <ShineBorder shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']} />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className='grid gap-4'>
            <div className='grid gap-2'></div>
            <div className='grid gap-2'></div>
          </div>
        </form>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}
